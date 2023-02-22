import {Database} from '@nozbe/watermelondb';

import {Exercise} from 'src/model/Exercise.model';
import {Template} from 'src/model/Template.model';
import {TemplateExercise} from 'src/model/TemplateExercise.model';

// import * as exercisesJSON from './exercises.json';
import * as sampleTemplatesJSON from './sample_templates.json';

/**
 * Initialize database with exercises
 */

/**
 * Populates the following tables: `templates`, `template_exercises`, `exercise`
 * from sample_templates.json
 */

export async function setupDb(database: Database) {
  /* Implementation to populate `exercises` table fom exercises.json 
    function buildExercise({name}: {name: string}) {
      return (exercise: Exercise) => {
        exercise.name = name;
      };
    }
    const exerciseTable = database.get<Exercise>('exercises');

    const exerciseTableBatch = exercisesJSON.exercises.map(exerciseData =>
      exerciseTable.prepareCreate(exercise => {
        buildExercise(exerciseData)(exercise);
      }),
    );
  */

  const exercisesTable = database.get<Exercise>('exercises');
  const templatesTable = database.get<Template>('templates');
  const templateExercisesTable =
    database.get<TemplateExercise>('template_exercises');

  const exercisesTableBatch: Exercise[] = [];
  const templatesTableBatch: Template[] = [];
  const templateExercisesTableBatch: TemplateExercise[] = [];

  for (const jsonTemplate of sampleTemplatesJSON.templates) {
    // Create exercises from templates

    const template = templatesTable.prepareCreate(templateRecord => {
      templateRecord.name = jsonTemplate.name;
    });

    templatesTableBatch.push(template);

    for (const jsonTemplateExercise of jsonTemplate.exercises) {
      let exercise = exercisesTableBatch.find(
        ({name}) => name === jsonTemplateExercise.name,
      );

      if (exercise === undefined) {
        exercise = exercisesTable.prepareCreate(exerciseRecord => {
          exerciseRecord.name = jsonTemplateExercise.name;
        });
        exercisesTableBatch.push(exercise);
      }

      const templateExercise = templateExercisesTable.prepareCreate(
        templateExerciseRecord => {
          templateExerciseRecord.exercise.set(exercise!);
          templateExerciseRecord.template.set(template);
        },
      );

      templateExercisesTableBatch.push(templateExercise);
    }
  }

  await database.write(async () => {
    await database.unsafeResetDatabase();
    await database.batch(...exercisesTableBatch);
    await database.batch(...templatesTableBatch);
    await database.batch(...templateExercisesTableBatch);
  });

  console.log(
    'Exercises table',
    await database.get('exercises').query().fetch(),
  );
  console.log(
    'Templates table',
    await database.get('templates').query().fetch(),
  );
  console.log(
    'Template exercises table',
    await database.get('template_exercises').query().fetch(),
  );
}

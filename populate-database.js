function createExercise(name, category, notes, format) {
  return post => {
    post.name = name;
    post.category = category;
    post.notes = notes;
    post.format = format;
  };
}

export async function populate(database) {
  await database.write(async () => {
    await database.unsafeResetDatabase();
    await database
      .get('exercises')
      .create(
        createExercise('Flat Barbell Bench Press', 'Chest', '', 'weight'),
      );
    await database
      .get('exercises')
      .create(
        createExercise('Seated Dumbbell Press', 'Shoulders', '', 'weight'),
      );
    await database
      .get('exercises')
      .create(createExercise('EZ-Bar Skullcrusher', 'Triceps', '', 'weight'));
    await database
      .get('exercises')
      .create(
        createExercise('Lateral Dumbbell Raise', 'Shoulders', '', 'weight'),
      );
    await database
      .get('exercises')
      .create(createExercise('Dumbbell Shrugs', 'Shoulders', 'Back', 'weight'));
  });
  console.log(
    JSON.stringify(await database.get('exercises').query().fetch(), null, 2),
  );
}

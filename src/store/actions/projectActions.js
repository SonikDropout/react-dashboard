export default (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Lonely',
      authorLastName: 'Dawg',
      authorId: 1,
      createdAt: Date.now()
    }).then(() => dispatch({ type: 'CREATE_PROJECT', project }))
      .catch(error => dispatch({ type: 'CREATE_PROJECT_FAILED', error }))
  }
}
function App() {
  const studentName = "Omkar";
  const course = "MERN Stack";
  const currentYear = 2026;

  return (
    <div>
      <h2>
        Student Details
      </h2>
      <p>Name : {studentName}</p>
      <p>Course : {course}</p>
      <p>Year : {currentYear}</p>
      <p>Next Year : {currentYear + 1}</p>
    </div>
  );
}

export default App;
document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const q1Value = parseInt(
    document.querySelector('input[name="q1"]:checked').value
  );
  const q2Value = parseInt(
    document.querySelector('input[name="q2"]:checked').value
  );
  const q3Value = parseFloat(document.querySelector('input[name="q3"]').value);

  const totalScore = q1Value + q2Value + q3Value;

  alert(`Your total score is: ${totalScore}`);
});

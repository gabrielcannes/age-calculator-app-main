export default function AgeCalculator(dateString) {
  const today = new Date();
  const birthDate = new Date(
    dateString.substring(4, 8),
    parseInt(dateString.substring(2, 4)) - 1,
    dateString.substring(0, 2)
  );

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += days < 0 ? 11 : 12;
  }

  days = today.getDate() - birthDate.getDate();
  if (days < 0) {
    const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
    days = tempDate.getDate() - birthDate.getDate() + today.getDate();
  }

  return {
    years: years,
    months: months,
    days: days,
  };
}

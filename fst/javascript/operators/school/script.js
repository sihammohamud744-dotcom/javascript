function checkSchool() {
    let age = parseInt(document.getElementById("age").value);
    let result = document.getElementById("result");

    if (isNaN(age) || age < 0) {
        result.innerHTML = "Please enter a valid age.";
        return;
    }

    // Logical AND (&&) for ranges
    if (age >= 0 && age <= 5) {
        result.innerHTML = "👶 Nursery / Early Childhood Education";
    } 
    else if (age >= 6 && age <= 15) {
        result.innerHTML = "🏫 Comprehensive School (Peruskoulu)";
    } 
    else if (age >= 16 && age <= 18) {
        result.innerHTML = "📚 Upper Secondary or Vocational School";
    } 
    else if (age >= 19 && age <= 25) {
        result.innerHTML = "🎓 University / Applied Sciences";
    } 
    // Logical OR (||)
    else if (age > 25 || age === 25) {
        result.innerHTML = "🎓 Adult Education / Work Life";
    } 
    else {
        result.innerHTML = "No category found.";
    }
}
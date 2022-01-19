let nama = "Rhodey", bb = 90, tb = 1.7

    let bmi = bb / (tb*tb)
    if (bmi < 18.5) {
        console.log("Status Berat Badan = Kurang")
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Status Berat Badan = Normal")
    }
    if (bmi >= 25 && bmi <= 29.9) {
        console.log("Status Berat Badan = Kelebihan")
    }
    if (bmi >= 30) {
        console.log("Status Berat Badan = Obesitas")
    }
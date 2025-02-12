document.getElementById('temperatureForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah pengiriman form

  // Ambil nilai input
  const temperature = parseFloat(document.getElementById('temperature').value);
  const unit = document.getElementById('unit').value;

  // Validasi input
  if (isNaN(temperature)) {
      alert('Harap masukkan angka yang valid untuk suhu.');
      return;
  }

  // Lakukan konversi
  let convertedTemp, explanation;
  if (unit === 'celsius') {
      convertedTemp = (temperature * 9 / 5) + 32; // Celcius ke Fahrenheit
      explanation = `
        ${temperature}°C dikonversi ke Fahrenheit menggunakan rumus:<br>
        <strong>(Celcius × 9/5) + 32</strong><br>
        Hasilnya: (${temperature} × 9/5) + 32 = <strong>${convertedTemp.toFixed(2)}°F</strong>.
      `;
  } else {
      convertedTemp = (temperature - 32) * 5 / 9; // Fahrenheit ke Celcius
      explanation = `
        ${temperature}°F dikonversi ke Celcius menggunakan rumus:<br>
        <strong>(Fahrenheit - 32) × 5/9</strong><br>
        Hasilnya: (${temperature} - 32) × 5/9 = <strong>${convertedTemp.toFixed(2)}°C</strong>.
      `;
  }

  // Tampilkan hasil
  document.getElementById('conversionOutput').textContent = `${convertedTemp.toFixed(2)}°`;
  document.getElementById('conversionExplanation').innerHTML = explanation; // Gunakan innerHTML untuk mendukung <br>
});

// Tambahkan fungsi untuk tombol Reverse
document.getElementById('reverseButton').addEventListener('click', function () {
  const unitSelect = document.getElementById('unit');
  const currentUnit = unitSelect.value;

  // Tukar nilai unit
  if (currentUnit === 'celsius') {
      unitSelect.value = 'fahrenheit';
  } else {
      unitSelect.value = 'celsius';
  }
});

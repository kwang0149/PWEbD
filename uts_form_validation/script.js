$(document).ready(function () {
  $(".form-gagal").hide();
  $(".form-sukses").hide();

  let nama_barang_error = true;
  $("#nama-barang").focusout(function () {
    check_nama_barang();
  });

  let harga_error = true;
  $("#harga").focusout(function () {
    check_harga();
  });

  let kode_barcode_error = true;
  $("#kode-barcode").focusout(function () {
    check_kode_barcode();
  });

  check_nama_barang = () => {
    let nama_barang = $("#nama-barang").val();
    if (nama_barang.length >= 10) {
      $("#nama_barang_error_message").hide();
    } else {
      $("#nama_barang_error_message").html("nama barang minimal 10 karakter");
      $("#nama_barang_error_message").css("color", "red");
      $("#nama_barang_error_message").show();
      nama_barang_error = false;
    }
  };

  //   CEK FULL NAME
  check_harga = () => {
    const harga = $("#harga").val();
    if (harga >= 5000) {
      $("#harga_error_message").hide();
      console.log("benar");
    } else {
      $("#harga_error_message").html("harga yang anda masukkan : " + harga + " Harga harus angka dan minimal 5000");
      $("#harga_error_message").css("color", "red");
      $("#harga_error_message").show();
      harga_error = false;
    }
  };

  check_kode_barcode = () => {
    const kode_barcode = $("#kode-barcode").val();
    if (kode_barcode.length >= 10) {
      $("#kode_barcode_error_message").hide();
    } else {
      $("#kode_barcode_error_message").html("Kode Barkode harus angka dan minimal 10 karakter");
      $("#kode_barcode_error_message").css("color", "red");
      $("#kode_barcode_error_message").show();
      kode_barcode_error = false;
    }
  };

  $("#cek_input_data_barang").submit(function (e) {
    e.preventDefault();
    nama_barang_error = true;
    harga_error = true;
    kode_barcode_error = true;
    check_nama_barang();
    check_harga();
    check_kode_barcode();

    if (nama_barang_error == true && harga_error == true && kode_barcode_error == true) {
      $(".form-sukses").show();
      $(".form-gagal").hide();
      console.log("pengisian form benar");
    } else {
      $(".form-gagal").show();
      $(".form-sukses").hide();
      console.log("PENGISIAN FORM SALAH");
    }
  });
});

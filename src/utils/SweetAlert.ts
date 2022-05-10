import Swal from "sweetalert2";

export const alertLoading = () => {
  Swal.fire({
    title: "Procesando..",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });
};

export const alertSuccessfully = (text: string) => {
  Swal.fire({
    icon: "success",
    title: "Operación exitosa!",
    text: text,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
  });
};

export const alertSuccessButton = (text: string) => {
  return Swal.fire({
    icon: "success",
    title: "Operación exitosa!",
    text: text,
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    }
  });
};

export const alertError = (
  text = "Sucedio un error, porfavor intentelo de nuevo!!"
) => {
  Swal.fire({
    icon: "error",
    title: "Operación fallida!",
    text: text,
    allowOutsideClick: false,
    allowEscapeKey: false,
  });
};

export const closeAlert = function () {
  Swal.close();
};

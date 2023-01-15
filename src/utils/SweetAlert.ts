import Swal from "sweetalert2"

export const alertLoading = () => {
  Swal.fire({
    title: "Procesando..",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading(null)
    },
  })
}

export const alertSuccessfully = (text: string) => {
  Swal.fire({
    icon: "success",
    title: "Operación exitosa!",
    text: text,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    showCloseButton: true,
  })
}

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
      return true
    }
  })
}

//Modal de alerta para confirmar una accion
export const alertActionButton = (
  title: string = "Realizar accion",
  text: string,
  btnText: string = "Continuar",
  icon: any = "info"
) => {
  return Swal.fire({
    icon: icon,
    title: title,
    text: text,
    confirmButtonText: btnText,
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      return true
    }
  })
}

export const alertError = (
  text = "Sucedio un error, porfavor intentelo de nuevo!!"
) => {
  Swal.fire({
    icon: "error",
    title: "Operación fallida!",
    text: text,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCloseButton: true,
  })
}

export const alertError2 = (
  text = "Sucedio un error, porfavor intentelo de nuevo!!"
) => {
  Swal.fire({
    icon: "error",
    title: "Operación fallida!",
    text: text,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
  })
}

export const closeAlert = function () {
  Swal.close()
}

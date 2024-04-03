import { FormData } from "@/components/Contact";
import Alert from "@/components/Alert";
import { toast } from "react-toastify";

export function sendEmail(data: FormData, setData: any) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      setData({ name: "", email: "", message: "" });
      toast(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "success",
      });
    })
    .catch((err) => {
      toast(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "error",
      });
    });
}

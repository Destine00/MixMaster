import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // const response = await axios.post(newsletterUrl, data)
  // console.log(response);

  return redirect("/");
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  console.log(navigation);
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our Newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="firstName" className="form-label">
          first name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="form-input"
          defaultValue="Achi"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          defaultValue="Nzube"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          defaultValue="achi@achi.com"
        />
      </div>
      <button type="submit" className="btn btn-block" disabled={isSubmitting}>
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export default NewsLetter;

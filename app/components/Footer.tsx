// components/Footer.js

interface contactProp {
    copy_right: String;
    telephone: String;
    email: String;
};


export const FooterBase = ({copy_right, telephone, email}: contactProp) => {
  return (
    <footer className="bg-[#83AC50] text-[#ffffff] p-4 m-0 text-center">
      
      <div className="m-0  py-8">
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
        <p>Teléfono: {telephone}</p>
        <p className="mt-3">&copy;{copy_right}</p>
      </div>
      
    </footer>
  );
};

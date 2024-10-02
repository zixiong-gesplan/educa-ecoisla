// components/Footer.js
export const FooterBase = ({text, telephone}: {text: String, telephone: String}) => {
  return (
    <footer className="bg-[#83AC50] text-[#ffffff] p-4 m-0 text-center">
      
      <div className="m-0  py-8">
        <p>Teléfono: {telephone}</p>
        <p className="mt-3">&copy;{text}</p>
      </div>
      
    </footer>
  );
};

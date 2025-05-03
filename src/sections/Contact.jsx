const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    const handleSubmit = async (e) => {
      return <section></section>;
    };
  };
};
export default Contact;

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message:"",
  });

  const [loading, setLoading] = useState(false);
  

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_4mtlogw',
      'template_uox2byh',
      {
        from_name: form.name,
        to_name: 'Bernard',
        from_email: form.email,
        to_email: 'bernardbebeni@gmail.com',
        message: form.message,
      },
      'esFlb45qRz8LBgpvB'
    )
    .then(() => {
      setLoading(false);
      toast.success('Thank you. I will get back to you as soon as possible');

      setForm({
        name: '',
        email: '',
        message: '',
      }, (error) => {
        setLoading(false)

        console.log(error);

        toast.error('Something went wrong');
      })
    })
  }

  return (
    <>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.95] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>
            Get in Touch
          </p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Email</span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Message'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>
            </form>
        </motion.div>
       
      </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact");
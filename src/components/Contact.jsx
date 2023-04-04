import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#fbaebd]'>Contact</h1>
            <form
                name='contact'
                method='post'
                data-netlify='true'
                netlify-honeypot="bot-field"
                onSubmit='submit'
            >
                <input type='hidden' name='form-name' value='contact' />
                <p class="hidden">
                    <label>
                        Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                </p>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='uppercase text-sm py-2'>Name </label>
                        <input  required  className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' id='name'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='phone' className='uppercase text-sm py-2'>Phone </label>
                        <input required  className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' id='phone'/>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor='email' className='uppercase text-sm py-2'>Email </label>
                    <input required  className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' id='email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor='subject' className='uppercase text-sm py-2'>Subject </label>
                    <input required  className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' id='subject' />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor='message' className='uppercase text-sm py-2'>Message </label>
                    <textarea required className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message' id='message'></textarea>
                </div>
                <button className='bg-[#fbaebd] text-gray-100 mt-4 w-full p-4 rounded-lg' type='submit'>Send Message</button>

            </form>

        </div>
    )
}

export default Contact

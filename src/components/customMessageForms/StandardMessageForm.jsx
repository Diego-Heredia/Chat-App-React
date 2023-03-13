import { PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid'
import {React, useState} from 'react'
import Dropzone from 'react-dropzone'

const StandardMessageForm = () => {
    const [message, setMessage] = useState("")
    const [attachment, setAttachment] = useState("")
    const [preview, setPreview] = useState("")
  return (
    <div className='message-form-container'>
        {preview && (
            <div className='message-form-preview'>
                <img src={preview} alt='Preview' className='message-form-preview-image' onLoad={()=> URL.revokeObjectURL(preview)}/>
            <XMarkIcon className='message-form-icon-x' onClick={()=> {
                setPreview("");
                setAttachment("");
            }} />
            </div>
        )}
        <div className='message-form'>
            <div className='message-form-input-container'>
                <input type='text' placeholder='Type a message...' className='message-form-input' value={message} onChange={(e)=> setMessage(e.target.value)} />
            </div>
            <div className='message-from-icons'>
                <Dropzone 
                acceptedFiles=".jpg,.jpeg,.png" 
                multiple = {false}
                noClick={true}
                onDrop={(acceptedFiles)=>{
                    setAttachment(acceptedFiles[0])
                    setPreview(URL.createObjectURL(acceptedFiles[0]))
                }}
                >
                    {({getRootProps, getInputProps, open})=>(
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <PaperClipIcon className='message-form-icon-clip' onClick={open} />
                    </div>
                    )}
                </Dropzone>

            </div>
        </div>
    </div>
  )
}

export default StandardMessageForm
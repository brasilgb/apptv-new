'use client'
import React, { SyntheticEvent, useState } from "react"
import { IoCheckmarkCircle, IoCloudUploadOutline } from "react-icons/io5"
import axios from 'axios';
import { useRouter } from 'next/navigation';
type Props = {}

const ImgApp = (props: Props) => {
  const router = useRouter();
  const [file, setFile] = useState("")
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [fileSaved, setFileSaved] = useState("")

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    setIsUploading(true)

    const formData = new FormData()
    formData.append("app", "apptv");
    formData.append("bgimage", file);

    if (file == "") {
      setFileSaved('Selecione uma imagem');
      setIsUploading(false);
    } else {
      try {
        const savedata = await fetch('http://api.gruposolar.com.br:8085/api/addbgimage', {
          method: 'POST',
          body: formData
        });
        setFileSaved(await savedata.text());
        window.location.reload();
      } catch (error) {
        console.error('Houve um erro ao salvar arquivo!');
      } finally {
        setIsUploading(false);
      }
    };
  }

  const handleFileSelect = (event: any) => {
    setFile(event.target.files[0])
  }
  return (
    <main className="flex items-center justify-center px-40 py-4">
      <div className="bg-solar-gray-light border border-white rounded shadow-md w-full p-4">
        <h1 className="text-gray-500 text-base">Imagem de Fundo da Aplicação</h1>
        {fileSaved &&
          <h1 className="bg-solar-blue-light text-white mt-2 px-2 py-1 rounded flex items-center justify-start"><IoCheckmarkCircle /> <span className="ml-2">{fileSaved}</span></h1>
        }
        <form onSubmit={handleSubmit} action="">
          <div className="flex items-center justify-center w-full mt-5">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
                <IoCloudUploadOutline size="40" />
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Clique para fazer upload da imagem</span></p>
                <p className="text-xs text-gray-500">Imagens PNG ou JPG</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileSelect} />
            </label>
          </div>
          <div className="w-full flex items-center justify-end">
            <button
              className="bg-solar-blue-light border-2 border-white rounded shadow mt-2 text-white w-40 h-10 text-center flex items-center justify-center"
              type="submit">

              {isUploading ? (
                <div className="w-6 h-6 rounded-full border-4 border-y-solar-green-light animate-spin" />
              )
                :
                ('Inserir imagem')
              }
            </button>
          </div>

        </form>

      </div>
    </main>
  )
}

export default ImgApp
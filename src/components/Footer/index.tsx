import moment from "moment"
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-solar-blue-light border-t border-solar-gray-light shadow">
            <p className="text-gray-200 py-1 text-center text-xs drop-shadow">&copy;{moment().format("YYYY")} Solar Comércio e Agroindústria Ltda. Todos os direitos reservados. | Desenvolvido por TI - Sistemas | Grupo Solar</p>
        </footer>
    )
}

export default Footer
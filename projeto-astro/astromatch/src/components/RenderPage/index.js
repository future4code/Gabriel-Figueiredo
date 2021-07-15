import React, { useState } from 'react';
import PageMatchs from '../PageMatchs';
import Pageprofile from '../PageProfile';



function RenderPage() {

    const [pagina, setPagina] = useState("pageProfile")
    

    const renderizaPagina = () => {
        switch (pagina) {
            case "pageProfile":
                return <Pageprofile
                    mudaPagina={mudaPagina}
                />
            case "pageMatchs":
                return <PageMatchs
                    voltaPagina={voltaPagina}
                />
            default:
        }
    }

    const mudaPagina = () => {
        setPagina(pagina === "pageProfile")
        if (pagina !== "pageMatchs") {
            setPagina("pageMatchs")
        }

    }
    const voltaPagina = () => {
        setPagina(pagina === "pageMatchs")
        if (pagina !== "pageProfile") {
            setPagina("pageProfile")
        }
    }
    return (
        <div>

            {renderizaPagina()}
        </div>
    )
}


export default RenderPage;
import useCotizador from "../hook/useCotizador"

function Error() {
    const {error} = useCotizador()
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 uppercase w-full text-center py-3">
     <p>{error}</p>
    </div>
  )
}

export default Error

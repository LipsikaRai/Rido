const Wallet = () => {
  return (
    <div className="min-h-screen bg-[#f8f1d7] p-5">

      <h1 className="text-3xl font-bold">
        Wallet
      </h1>

      <div className="bg-black text-white rounded-3xl p-6 mt-8">

        <p className="text-gray-400">
          Available Balance
        </p>

        <h2 className="text-5xl font-bold mt-2">
          ₹1,240
        </h2>

      </div>

      <div className="bg-white rounded-3xl p-5 mt-6 shadow-lg">

        <h3 className="font-bold text-xl">
          Payment Methods
        </h3>

        <div className="mt-4 flex flex-col gap-3">

          <div className="bg-gray-100 p-4 rounded-2xl">
            Google Pay
          </div>

          <div className="bg-gray-100 p-4 rounded-2xl">
            PhonePe
          </div>

          <div className="bg-gray-100 p-4 rounded-2xl">
            Paytm
          </div>

        </div>

      </div>

    </div>
  )
}

export default Wallet
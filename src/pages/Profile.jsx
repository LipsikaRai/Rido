const Profile = () => {
  return (
    <div className="min-h-screen bg-[#f8f1d7] p-5">

      <div className="flex flex-col items-center">

        <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center text-5xl font-bold">
          L
        </div>

        <h1 className="text-3xl font-bold mt-4">
          Lipsika Rai
        </h1>

        <p className="text-gray-500">
          Premium Rider
        </p>

      </div>

      <div className="bg-white rounded-3xl p-5 mt-8 shadow-lg">

        <div className="flex justify-between py-4 border-b">
          <p>Total Rides</p>
          <p className="font-bold">124</p>
        </div>

        <div className="flex justify-between py-4 border-b">
          <p>Saved Amount</p>
          <p className="font-bold">₹2,450</p>
        </div>

        <div className="flex justify-between py-4">
          <p>Rating</p>
          <p className="font-bold">4.9 ⭐</p>
        </div>

      </div>

    </div>
  )
}

export default Profile
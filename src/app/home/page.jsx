export default function HomePage() {
  return (
    <div className="h-screen bg-white flex flex-col">

      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div>
          <h1 className="text-2xl font-bold">Swila</h1>
          <p className="text-sm text-gray-500">
            Connect with ease
          </p>
        </div>

        <div className="flex gap-4">
          <button>🔍</button>
          <button>⋮</button>
        </div>
      </header>

      {/* Search */}
      <div className="p-4">
        <input
          className="w-full rounded-full bg-gray-100 px-5 py-3 outline-none"
          placeholder="Search chats..."
        />
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">

        {[1,2,3,4,5].map((item)=>(
          <div
            key={item}
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

            <div className="flex-1">
              <h2 className="font-semibold">
                Ahmed
              </h2>

              <p className="text-gray-500 text-sm">
                Hey! Welcome to Swila 👋
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-400">
                2m
              </p>

              <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1">
                2
              </span>
            </div>

          </div>
        ))}

      </div>

      {/* Floating Action Button */}
      <button className="absolute bottom-24 right-5 h-14 w-14 rounded-full bg-cyan-500 text-white text-3xl shadow-lg">
        +
      </button>

      {/* Bottom Navigation */}
      <footer className="h-16 border-t flex justify-around items-center bg-white">
        <button className="font-semibold text-cyan-600">
          Chats
        </button>

        <button className="text-gray-500">
          Contacts
        </button>

        <button className="text-gray-500">
          Profile
        </button>
      </footer>

    </div>
  );
}
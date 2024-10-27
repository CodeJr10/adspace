// app/dashboard/profile/judge/page.js
export default function JudgeProfilePage() {
  const judgeData = {
    name: "Jane Doe",
    email: "janedoe@example.com",
    contact_no: "987-654-3210",
    organization: "Judicial Authority",
    experience: "10 years",
  };

  return (
    <div className="min-h-screen bg-[#1B1F3B] flex items-center justify-center p-5">
      {/* Main container with sidebar and profile */}
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="card w-72 bg-white p-5 shadow-md shadow-purple-200/50 rounded-md">
          <ul className="w-full flex flex-col gap-2">
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <button className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
                <svg
                  stroke="#000000"
                  className="icon glyph size-6 group-focus:fill-white group-focus:stroke-white"
                  id="dashboard-alt"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#000000"
                >
                  <path d="M14,10V22H4a2,2,0,0,1-2-2V10Z"></path>
                  <path d="M22,10V20a2,2,0,0,1-2,2H16V10Z"></path>
                  <path d="M22,4V8H2V4A2,2,0,0,1,4,2H20A2,2,0,0,1,22,4Z"></path>
                </svg>
                Dashboard
              </button>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <button className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <path
                    className="group-focus:fill-white"
                    fill="#000"
                    d="M14.2788 2.15224C13.9085 2..."
                  ></path>
                </svg>
                Settings
              </button>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <button className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="size-6"
                >
                  <path
                    className="group-focus:fill-white"
                    fill="#000000"
                    d="M17.2929 14.2929C16.9024 14..."
                  ></path>
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Profile Card */}
        <div className="bg-[#2C2F4A] rounded-lg shadow-lg max-w-md w-full p-6">
          <div className="text-center mb-6">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#FFDD57]"
              src="https://images.unsplash.com/photo-1599061081156-15f62d973f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg5MzZ8MHwxfGFsbHwxfHx8fHx8fHwxNjI5ODc0NzE0&ixlib=rb-1.2.1&q=80&w=400"
              alt="Judge Profile"
            />
            <h1 className="text-2xl font-bold text-[#FFDD57]">
              {judgeData.name}
            </h1>
          </div>
          <div className="space-y-2">
            <p className="text-[#E5E7EB]">
              <strong>Email:</strong> {judgeData.email}
            </p>
            <p className="text-[#E5E7EB]">
              <strong>Phone:</strong> {judgeData.contact_no}
            </p>
            <p className="text-[#E5E7EB]">
              <strong>Organization:</strong> {judgeData.organization}
            </p>
            <p className="text-[#E5E7EB]">
              <strong>Experience:</strong> {judgeData.experience}
            </p>
          </div>
          <div className="mt-6 flex justify-between">
            <button className="bg-transparent border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-200">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// app/dashboard/profile/admin/page.js

export default function AdminProfilePage() {
  const adminData = {
    username: "AdminUser",
    email: "admin@example.com",
    contact_no: "123-456-7890",
    company_name: "Example Company",
    dept_name: "Administration",
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
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
              alt="Admin Profile"
            />
            <h1 className="text-2xl font-bold text-[#FFDD57]">
              {adminData.username}
            </h1>
          </div>
          <div className="space-y-2">
            <p className="text-[#E5E7EB]">
              <strong>Email:</strong> {adminData.email}
            </p>
            <p className="text-[#E5E7EB]">
              <strong>Phone:</strong> {adminData.contact_no}
            </p>
            <p className="text-[#E5E7EB]">
              <strong>Company:</strong> {adminData.company_name}
            </p>
            <p className="text-[#E5E7EB]">
              <strong>Department:</strong> {adminData.dept_name}
            </p>
          </div>
          <div className="mt-6 flex justify-between"></div>
        </div>
      </div>
    </div>
  );
}

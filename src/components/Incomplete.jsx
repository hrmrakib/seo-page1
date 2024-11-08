// import { BsStack } from "react-icons/bs";
// import { PiNotepadFill } from "react-icons/pi";
// import { FaRegComments } from "react-icons/fa6";
// import { GrAttachment } from "react-icons/gr";
// import { MdOutlineCalendarMonth } from "react-icons/md";

const incomplete = [
  {
    id: 1,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    client: "Client Name",
    assignee: "Sadik Istiak",
  },
];

const Incomplete = () => {
  return (
    <div className='bg-[#F2F4F7] max-w-96 mx-auto p-1.5'>
      <h1 className='text-center'>Incomplete</h1>
      <div className='mt-2 flex flex-col gap-1/2'>
        {/* card */}
        <div className='bg-white p-2 rounded-md'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>
              <img
                className='size-10 rounded-full'
                src='/client.png'
                alt='client'
              />
              <h3 className='text-sm font-bold'>Client Name</h3>
            </div>
            <div className='flex items-center gap-1'>
              <img
                className='size-10 rounded-full'
                src='/client2.png'
                alt='client'
              />
              <h3 className='text-sm font-bold'>Sadik Istiak</h3>
            </div>
          </div>
          <div className='my-2 flex items-center justify-between'>
            <div className='flex items-center gap-1'>
              {/* <BsStack /> */}
              <p className='text-sm text-gray-800 font-medium'>
                Lorem ipsum, dolor sit amet consc...
              </p>
            </div>
            <div className='bg-[#F2F4F7] p-1.5 rounded-md flex items-center gap-1'>
              {/* <PiNotepadFill /> */}
              <span className='text-sm font-bold'>1/2</span>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <img className='size-8 rounded-full' src='/user.png' alt='user' />
            <img className='size-8 rounded-full' src='/user2.jfif' alt='user' />
            <div className='bg-[#F2F4F7] px-1 py-1 rounded-full flex items-center justify-center'>
              <span>12+</span>
            </div>
            <div className='flex items-center gap-1 cursor-pointer'>
              {/* <FaRegComments /> */}
              <span className='text-sm'>12</span>
            </div>

            <div className='flex items-center gap-1'>
              <input type='file' id='file-upload' className='hidden' multiple />
              <label
                htmlFor='file-upload'
                className='flex items-center gap-1 cursor-pointer'
              >
                {/* <GrAttachment /> */}ATT
              </label>
              <span className='text-sm'>0</span>
            </div>
            <div className='flex items-center gap-1'>
              {/* <MdOutlineCalendarMonth /> */}
              <span className='cursor-pointer text-sm'>2022-01-01</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incomplete;

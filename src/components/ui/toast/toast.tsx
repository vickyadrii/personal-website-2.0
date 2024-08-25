type Props = {
  isOpen: boolean;
};

const Toast = ({ isOpen }: Props) => {
  return (
    <div
      className={`fixed ${isOpen ? "right-8" : "-right-full"} bottom-8 z-50 transition-all duration-[350ms] ease-in-out`}
    >
      <div className="pl-5 px-14 py-3 bg-gradient-to-r from-[#1a1a1b] to-[#131314] border border-black rounded-lg shadow-xl shadow-black">
        <div className="space-y-1">
          <h3 className="font-medium">Success</h3>
          <p className="md:text-sm text-xs text-primary-dark-500">Send message successfully!</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;

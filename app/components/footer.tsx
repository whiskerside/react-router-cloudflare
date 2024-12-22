export default function Footer() {
  return (
    <>
      <footer className="px-2 py-8 bg-white border-t border-gray-200 sm:px-6">
        <div className="flex flex-col items-center justify-between w-full max-w-4xl px-2 mx-auto text-xs text-gray-400 cursor-default sm:flex-row">
          <ul className=" space-x-3">
            <li className="inline">
              <a href="/" className="hover:text-gray-600">
                2024 @ Copyright
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              &copy; 2024. 회사이름
            </span>
            <div className="flex justify-center mt-0">
              <a className="text-gray-500 hover:text-gray-900" href="https://www.instagram.com/teamsmart_ceo/" target="_blank">
                <FontAwesomeIcon icon={fab.faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      // <footer className="bg-white rounded-lg shadow m-4">
      //   <div className="p-4">
      //     &copy; 2024. 회사이름 | 대표자 : 조재원
      //   </div>
      // </footer>
    );
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
      <footer className="w-full max-w-screen-lg mx-auto pb-6 px-2">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-6 border-solid border-t">
          <span className="text-sm text-gray-500 sm:text-center">
            &copy; 2024. 팀스마트컴퍼니
          </span>
          <div className="flex justify-center mt-0">
            <a className="pt-0.5 text-gray-500 hover:text-gray-900" href="https://www.instagram.com/teamsmart_company/" target="_blank">
              <FontAwesomeIcon icon={fab.faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    );
}
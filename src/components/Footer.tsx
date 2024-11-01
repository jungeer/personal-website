import React from "react";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/jungeer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:95243241@qq.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              小红书博主（ID: 420524309）· 95243241@qq.com
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} 前端俊哥儿乐___. All rights reserved.
            </p>
          </div>

          <div className="text-xs text-gray-400 text-center">
            <p>
              Built with{" "}
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                React
              </a>
              {" + "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                Tailwind CSS
              </a>
              {" + "}
              <a
                href="https://bolt.new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                Bolt.new
              </a>
              {" + "}
              <a
                href="https://www.cursor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                Cursor
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

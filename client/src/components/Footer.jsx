import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'

const FooterCom = () => {
  return (
    <Footer
      container
      className="border border-t-8 border-teal-500 dark:text-white"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold "
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                pro's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <FooterTitle title="About"/>
            <FooterLinkGroup col>
              <FooterLink 
              href="https://www.100jsprojects.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                100 js Projects
              </FooterLink>

              <FooterLink 
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              >
                Pro's Blog
              </FooterLink>
            </FooterLinkGroup>
            </div>
            <div>
            <FooterTitle title="follow us"/>
            <FooterLinkGroup col>
              <FooterLink 
              href="https://github.com/ghimireprashanna"
              target="_blank"
              rel="noopener noreferrer"
              >
                Github
              </FooterLink>

              <FooterLink 
              href="#"
              
              >
                Discord
              </FooterLink>
            </FooterLinkGroup>
            </div>
            <div>
            <FooterTitle title="legal"/>
            <FooterLinkGroup col>
              <FooterLink 
              href="#"
              
              >
                Privacy policy
              </FooterLink>

              <FooterLink 
              href="#"
              
              >
                Terms &amp; Conditions
              </FooterLink>
            </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright 
          href="#"
          by="Pro's blog"
          year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook}/>
            <FooterIcon href="#" icon={BsInstagram}/>
            <FooterIcon href="#" icon={BsTwitter}/>
            <FooterIcon href="https://github.com/ghimireprashanna" icon={BsGithub}/>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;

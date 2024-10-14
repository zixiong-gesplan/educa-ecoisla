
const SocialButton = ({ d, url }: { d: string, url: string }) => {
    return (<a href={url}>
        <svg className="inline w-6 h-6 md:w-14 md:h-14 hover:bg-custom-light-bg hover:bg-opacity-30 cursor-pointer rounded-lg mr-2 text-custom-dark-green dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d={d} clipRule="evenodd" />
        </svg>
    </a>);
}

export default SocialButton;


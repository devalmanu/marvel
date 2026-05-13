import './spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner-container">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                className="spinner"
                width="160" 
                height="160"
            >
                {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, index) => (
                    <g key={angle} transform={`rotate(${angle} 50 50)`}>
                        <rect 
                            fill="#9f0013" 
                            height="9" 
                            width="4" 
                            ry="2.43" 
                            rx="2" 
                            y="32.5" 
                            x="48"
                            className={`spinner-rect spinner-rect-${index}`}
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default Spinner;
import PropTypes from 'prop-types'

function Logo({ size = 80 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.512 31.5256L53.5601 9.536C60.1937 5.3744 68.8001 10.1592 68.8001 18.0104V61.9896C68.8001 69.84 60.1937 74.6256 53.5601 70.464L18.512 48.4744C12.2728 44.5592 12.2728 35.4408 18.512 31.5256Z"
        fill="#1EA5FC"
      />
      <path
        d="M61.4879 31.5256L26.44 9.536C19.8064 5.3744 11.2 10.1592 11.2 18.0104V61.9896C11.2 69.84 19.8064 74.6256 26.44 70.464L61.4879 48.4744C67.7271 44.5592 67.7271 35.4408 61.4879 31.5256Z"
        fill="#7B6EF6"
      />
    </svg>
  )
}

Logo.propTypes = {
  size: PropTypes.number,
}

export default Logo

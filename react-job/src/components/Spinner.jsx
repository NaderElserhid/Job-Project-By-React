import ClipLoader  from "react-spinners/ClipLoader"

const override= {
    display: 'block',
    margin: '200px auto',
};

const Spinner = ({Loading}) => {
  return (
    <ClipLoader
    color="#4338ca"
     loading={Loading}
     cssOverride={override}
     size={150}
    />
  )
}

export default Spinner
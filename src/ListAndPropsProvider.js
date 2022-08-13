export default function ListAndPropsProvider(props) {
  return <li key={props.id}>I am a {props.brand}</li>;
}

import { LitleHeader,ProfileImage,Text } from '../style/Styles';
import PP from '../assets/profile.svg'


export default function LittleHeader() {
  return (
    <LitleHeader >
      <ProfileImage  src={PP} alt=""/>
      <Text style={{}}>Hey! Aleem</Text>
    </LitleHeader>
  );
}

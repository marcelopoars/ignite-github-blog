import {
  ArrowUpRightIcon,
  BuildingIcon,
  GithubIcon,
  UserGroupIcon,
} from "../../../../components";
import {
  Avatar,
  Bio,
  GithubLink,
  ProfileContainer,
  ProfileContent,
  SocialMedia,
} from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <Avatar src="https://github.com/marcelopoars.png" alt="" />

        <Bio>
          <h1>Marcelo Pereira</h1>
          <p>Frontend Developer and Instructor.</p>

          <SocialMedia>
            <ul>
              <li>
                <GithubIcon />
                marcelopoars
              </li>
              <li>
                <BuildingIcon />
                MP Software
              </li>
              <li>
                <UserGroupIcon />
                84 seguidores
              </li>
            </ul>

            <GithubLink
              href="https://github.com/marcelopoars"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <ArrowUpRightIcon />
            </GithubLink>
          </SocialMedia>
        </Bio>
      </ProfileContent>
    </ProfileContainer>
  );
}

import { useEffect, useState } from "react";

import {
  ArrowUpRightIcon,
  BuildingIcon,
  GithubIcon,
  Spinner,
  UserGroupIcon,
} from "../../../../components";

import { api } from "../../../../lib";

import {
  Avatar,
  Bio,
  GithubLink,
  ProfileContainer,
  ProfileContent,
  SocialMedia,
} from "./styles";

interface UserType {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  company: string;
  followers: number;
}

export function Profile() {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUser() {
    const response = await api.get("/users/marcelopoars");

    setUser(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const { avatar_url, name, bio, company, login, followers } = user;

  return (
    <ProfileContainer>
      <ProfileContent>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Avatar>
              <img src={avatar_url} alt="Foto Marcelo Pereira" />
            </Avatar>

            <Bio>
              <h1>{name}</h1>
              <p>{bio}</p>

              <SocialMedia>
                <ul>
                  <li>
                    <GithubIcon />
                    {login}
                  </li>

                  {company && (
                    <li>
                      <BuildingIcon />
                      {company}
                    </li>
                  )}
                  <li>
                    <UserGroupIcon />
                    {followers} seguidores
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
          </>
        )}
      </ProfileContent>
    </ProfileContainer>
  );
}

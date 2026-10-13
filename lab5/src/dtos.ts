type UserResponseDTO = {
    data: UserResponseDTO;
    support: {
        url: string;
        text: string;
    };
};

type UserRequestDTO = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export type { UserResponseDTO, UserRequestDTO };

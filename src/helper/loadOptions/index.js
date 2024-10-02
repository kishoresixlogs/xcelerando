import { Introverted,tvOption,ageOption,musicOption, Politics, RecreationalSubstances, Sexuality, bodyscale, cities, comedianOption, eyecolor, friendshipintent, genderOptions, haircolor, heightFtOptions, heightInchOption, idealfriendship, idealrelationship, incomeOptions, interestOptions, jobOptions, morningnight, personalityOption, raceOption, relationshipintent, religionOptions, roommate, schoolOptions, sportTeams, stageoflife, weightOption } from "../../data";


export const citiesLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = cities;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = cities.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const schoolLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = schoolOptions;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = schoolOptions.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const jobLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = jobOptions;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = jobOptions.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const interestLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = interestOptions;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = interestOptions.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const comedianLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = comedianOption;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = comedianOption.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const sportTeamLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = sportTeams;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = sportTeams.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const genderLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = genderOptions;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = genderOptions.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const stageoflifeLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = stageoflife;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = stageoflife.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const religionLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = religionOptions;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = religionOptions.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const incomeLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = incomeOptions;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = incomeOptions.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const raceLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = raceOption;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = raceOption.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const hairColorLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = haircolor;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = haircolor.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const eyeColorLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = eyecolor;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = eyecolor.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const bodyScaleLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = bodyscale;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = bodyscale.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const personalityLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = personalityOption;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = personalityOption.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const morningnightLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = morningnight;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = morningnight.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const introvertedLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = Introverted;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = Introverted.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const idealrelationshipLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = idealrelationship;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = idealrelationship.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const idealfriendshipLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = idealfriendship;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = idealfriendship.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const friendshipintentLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = friendshipintent;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = friendshipintent.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const relationshipintentLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = relationshipintent;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = relationshipintent.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const recreationalSubstancesLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = RecreationalSubstances;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = RecreationalSubstances.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const politicsLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = Politics;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = Politics.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const sexualityLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = Sexuality;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = Sexuality.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const roommateLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = roommate;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = roommate.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const weightLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = weightOption;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = weightOption.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const heightfeetLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = heightFtOptions;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = heightFtOptions.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};


export const heightInchLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = heightInchOption;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = heightInchOption.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const musicLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = musicOption;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = musicOption.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const tvLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = tvOption;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = tvOption.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};

export const ageLoadOption = async (search, prevOptions) => {
    let filteredOptions;
    if (!search) {
        filteredOptions = ageOption;
    } else {
        const searchLower = search.toLowerCase();
        filteredOptions = ageOption.filter(
            ({ label }) =>
                label.toLowerCase().includes(searchLower)
        );
    }
    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );
    return {
        options: slicedOptions,
        hasMore
    };
};



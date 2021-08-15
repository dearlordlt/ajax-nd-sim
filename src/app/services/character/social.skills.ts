export interface ISkill {
  name: string;
  value: number;
  description: string;
}

export interface ISkillGroup {
  groupName: string;
  skills: ISkill[];
}

const skills: ISkillGroup[] = [
  {
    groupName: 'SOCIAL',
    skills: [
      { name: 'Leadership', value: 0, description: '' },
      { name: 'Persuasion', value: 0, description: '' },
      { name: 'Empathy', value: 0, description: '' },
      { name: 'Seneschal', value: 0, description: '' },
      { name: 'Performer', value: 0, description: '' },
    ]
  },
  {
    groupName: 'COMBAT',
    skills: [
      { name: '', value: 0, description: '' },
    ]
  },
]

export default {
  skills,
};

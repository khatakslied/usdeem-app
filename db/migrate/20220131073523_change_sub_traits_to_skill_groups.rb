class ChangeSubTraitsToSkillGroups < ActiveRecord::Migration[6.0]
  def change
    rename_table :sub_traits, :skill_groups
  end
end

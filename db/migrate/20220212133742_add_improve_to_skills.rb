class AddImproveToSkills < ActiveRecord::Migration[6.0]
  def change
    add_column :skills, :improve, :boolean
  end
end

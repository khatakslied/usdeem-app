json.array!(@last_month_reports.flatten) do |report|
  json.id report.id
  json.sender_id report.sender_id
  json.recipient_id report.recipient_id
  json.key_traits report.key_traits do |key_trait|
    json.id key_trait.id
    json.category key_trait.category
    json.skill_groups key_trait.skill_groups do |skill_group|
    json.category skill_group.category
    json.score skill_group.score
    json.skills skill_group.skills do |skill|
      json.name skill.name
      json.improve skill.improve
    end
    end
  end
end

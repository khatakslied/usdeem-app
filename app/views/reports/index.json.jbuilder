# json.array! @last_month_reports, :id, :key_traits
json.array! @last_month_reports, partial: 'reports/last_month', as: :last_month
json.array! @reports, partial: 'reports/all', as: :all

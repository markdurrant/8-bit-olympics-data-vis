require 'rubygems'
require 'nokogiri'

require 'open-uri'
require 'json'

scrape_urls = [
"http://www.databaseolympics.com/sport/sportevent.htm?sp=ATH&enum=110",
"http://www.databaseolympics.com/sport/sportevent.htm?sp=ATH&enum=700",
"http://www.databaseolympics.com/sport/sportevent.htm?sp=ATH&enum=120",
"http://www.databaseolympics.com/sport/sportevent.htm?sp=ATH&enum=710",
"http://www.databaseolympics.com/sport/sportevent.htm?sp=ATH&enum=130",
"http://www.databaseolympics.com/sport/sportevent.htm?sp=ATH&enum=720"
]

scrape_urls.each do |scrape_url|
  all_results = Nokogiri::HTML(open(URI.escape(scrape_url)))

  output = {}
  event = ""

  all_results.css("tr.cl1, tr.cl2").each do |result|

    year = result.css(":nth-child(1) a").text
    e = result.css(":nth-child(2)").text
    event = e.strip if event.empty?
    athlete = result.css(":nth-child(3) a").text
    medal = result.css(":nth-child(4)").text
    country = result.css(":nth-child(5) a").text
    time = result.css(":nth-child(6)").text


    #puts "In #{year}, #{athlete} ran #{event} in #{time}"
    output[year] = [] unless output.has_key?(year)
    output[year] << {
      :athlete => athlete,
      :medal => medal,
      :country => country,
      :time => time
    }

  end


  # puts event
  puts "{event: \"#{event}\", data: #{output.to_json}},"
end


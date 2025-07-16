FROM jekyll/jekyll:latest

# Set the working directory
WORKDIR /srv/jekyll

# Copy Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install dependencies
RUN bundle install

# Copy the rest of the site
COPY . .

# Expose port 4000
EXPOSE 4000

# Start Jekyll server
CMD ["jekyll", "serve", "--host", "0.0.0.0", "--livereload"]
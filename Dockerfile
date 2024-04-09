FROM node:21-bullseye

RUN mkdir -p /home
WORKDIR /home

RUN git clone https://github.com/navibryle/portfolio.git
WORKDIR /home/portfolio
RUN npm i && npm run build
WORKDIR /home/portfolio
ENTRYPOINT ["./startup.sh"]
